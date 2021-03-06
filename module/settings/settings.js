import TraitSettings from './TraitSettings.js'

export const registerSettings = () => {
  game.settings.registerMenu('cortexprime', 'TraitSettings', {
    hint: game.i18n.localize('CortexPrime.TraitSettingsH'),
    icon: 'fas fa-globe',
    label: game.i18n.localize('CortexPrime.TraitSettingsL'),
    name: game.i18n.localize('CortexPrime.TraitSettingsN'),
    restricted: true,
    type: TraitSettings
  })

  game.settings.register('cortexprime', 'traitSets', {
    name: 'Trait Sets',
    default: {},
    scope: 'world',
    type: Object,
    config: false,
  })
}
