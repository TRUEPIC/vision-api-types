import { Organization } from '@/types/schemas/Organization'

/**
 * @internal
 */
export type SerializedOrganization = Pick<
  Organization,
  'enabled_features' | 'id' | 'is_mfa_required' | 'name' | 'organization_slug'
>
