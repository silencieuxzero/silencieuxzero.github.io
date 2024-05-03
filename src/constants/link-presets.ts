import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about',
  },
  [LinkPreset.Links]: {
    name: i18n(I18nKey.links),
    url: '/links',
  },
  [LinkPreset.Pictures]: {
    name: i18n(I18nKey.pictures),
    url: '/pictures',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive',
  },
  [LinkPreset.WebChat]: {
    name: i18n(I18nKey.webchat),
    url: '/webchat',
  },
}
