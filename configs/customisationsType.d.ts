export default interface customisations {
  Moderation_Logs_Per_Page: number,
  Daily_Action_Limits: {
    verify: number,
    add_note: number,
    warn: number,
    timeout: number,
    kick: number,
    ban: number,
    add_mature: number,
    remove_mature: number,
    disable_images: number,
    enable_images: number,
    default: number
  },
  Staff_Cant_Punish_Staff_Restriction: {
    verify?: boolean,
    add_note?: boolean,
    warn?: boolean,
    timeout?: boolean,
    kick?: boolean,
    ban?: boolean,
    add_mature?: boolean,
    remove_mature?: boolean,
    disable_images?: boolean,
    enable_images?: boolean,
  },
}
