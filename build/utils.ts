import { exec } from 'child_process';
import  {promisify} from 'util';

function makeid(length) {
  let result           = '';
  const characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function getGitRevision() {
  try {
    const { stdout, stderr } = await promisify(exec)('git rev-parse --short=10 HEAD', {encoding: 'utf8'});
    return stdout.trim();
  } catch (e) {
    console.error(e)
    let result = `_${makeid(9)}`;
    console.log(`Git hash is unavailable, mocking with randoms string ${result}`);
    return result
  }
}

export async function getConsts() {
  const env = process.env.VITE_BUILD_ENV || 'local';
  console.log(`Using ${env}.json`)
  const result = require(`./build/${env}.json`); // vite builder resolves imports from the root dir if it's dynamic
  if (env === 'test') {
    result.GIT_HASH =  "TEST";
  } else {
    result.GIT_HASH =  await getGitRevision();
  }
  return result;
}
