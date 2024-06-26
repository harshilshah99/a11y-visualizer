import { Settings } from "./types";
export const initialSettings: Settings = {
  accessibilityInfo: false,
  image: true,
  formControl: true,
  link: true,
  button: true,
  heading: true,
  ariaHidden: true,
  showLiveRegions: true,
  announcementMaxSeconds: 30,
  announcementSecondsPerCharacter: 0.5,
  tipOpacityPercent: 80,
  liveRegionOpacityPercent: 80,
} as const;
