/**
 * Public APIs
 */

export  type {Vue, ClassComponentHooks } from './vue'

export { Options, createDecorator, mixins, setup } from './helpers'

export { prop } from './props'

/**
 * Other types
 */

export type {
  VueBase,
  VueMixin,
  VueStatic,
  VueConstructor,
  PublicProps,
} from './vue'

export type {
  PropOptions,
  PropOptionsWithDefault,
  PropOptionsWithRequired,
  WithDefault,
  VueWithProps,
  DefaultFactory,
  DefaultKeys,
  ExtractDefaultProps,
  ExtractProps,
} from './props'

export type {
  VueDecorator,
  MixedVueBase,
  UnionToIntersection,
  ExtractInstance,
  UnwrapSetupValue,
  UnwrapPromise,
} from './helpers'
