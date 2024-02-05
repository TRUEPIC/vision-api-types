import { ResponseData } from '../api/ResponseData'

interface AppSettings {
  id: number
  name: string
  shortname: string
  color: {
    primary: string
  }
  phone: {
    help: {
      number: string
      label: string
    }
  }
  labels: {
    customer_identifier: string
    customer_identifier_2: string
    group_id: string
    photo_identifier: string
  }
  templates: {
    success_message: string
  }
  gps_threshold?: number
  allow_image_deletes: boolean
  allow_rooted_device_capture: boolean
  disable_video_selection: boolean
  disable_save_to_camera_roll: boolean
  images: {
    'WebLogo@3x': {
      src: string
    }
  }
}

interface SkinResponseData extends ResponseData {
  skin: AppSettings
}
