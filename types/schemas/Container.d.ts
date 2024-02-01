/** A resource used to contain the urls for different services used to serve assets to the Vision application. */
export interface Container {
  /** The id of the container.
   * @example 1843
   */
  ID: number

  /** The name of the container.
   * @example 'Staging Vision'
   */
  container: string

  /** The cname ref for this container
   * @example 'cf'
   */
  cname: string

  /** The name of the container's bucket in AWS S3.
   * @example 'staging-truepics'
   */
  bucket_name?: string

  /** The base http url used for assets
   * @example 'http://dgwerg3w4t34.cloudfront.net'
   * @format url
   */
  http: string

  /** The base https url used for assets
   * @example 'https://gfhdfegtwefwe4.cloudfront.net'
   * @format url
   */
  https: string

  /** The url used for streaming assets to iOS clients
   * @example 'https://t435y4rtgtwefwe4.cloudfront.net'
   * @format url
   */
  ios_streaming: string

  /** The url used for streaming assets to non-iOS clients
   * @example 'https://rtnhs45trghaedfvadsfg.cloudfront.net'
   * @format url
   */
  streaming: string
}
