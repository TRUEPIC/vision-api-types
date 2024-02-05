import { TestResult, SafesearchResult } from '@/types/enums/Verification'
import { BaseResult } from '@/types/BaseResult'

/** The result of a reverse-image-search test.
 * Detects similar images from across the internet. */
export interface RisResult extends BaseResult {
  /** The haversine measurement
   * @example '196055.81'
   */
  haversine?: number

  /** A stringified JSON object showing the secondary response from the reverse-image-search service
   * @example '196055.81'
   */
  secondary_response?: string

  /** The single-letter result of a RIS test
   * @example 'F'
   */
  secondary_result?: TestResult

  /** A stringified array of the possible image urls of existing images on the internet.
   * @example "["https://pbs.twimg.com/media/Dk5QC_0WsAAZXcT.jpg","https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=726975557348796"]"
   */
  candidate_urls?: string

  /** The text annotation for the test result. Shows the text found in the image.
   * @example "Images may be subject to copyright. Learn More"
   */
  text_annotation?: string

  /** The label annotation for the test result. Shows which labels are associated with the image.
   * @example "adventure | tree | forest | abseiling | jungle | recreation | climbing harness | extreme sport | rock climbing equipment | belay device"
   */
  label_annotation?: string

  /** The secondary url of a matching image on the internet
   * @example "https://dwegwevy6.cloudfront.net/jp/images/3wef731/b0a8ewcb5e6e598ff8dcec7bac60bf3.jpeg"
   */
  secondary_matched_url?: string

  /** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
   * @example 'VERY_UNLIKELY'
   */
  safesearch_adult?: SafesearchResult

  /** Spoof likelihood. The likelihood that a modification was made to the image's canonical version to make it appear funny or offensive.
   * @example 'VERY_UNLIKELY'
   */
  safesearch_spoof?: SafesearchResult

  /** Likelihood that this is a medical image.
   * @example 'VERY_UNLIKELY'
   */
  safesearch_medical?: SafesearchResult

  /** Likelihood that this image contains violent content.
   * @example 'VERY_UNLIKELY'
   */
  safesearch_violence?: SafesearchResult

  /** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
   * @example 'VERY_UNLIKELY'
   */
  safesearch_racy?: SafesearchResult
}
