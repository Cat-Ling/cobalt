import { defaultLocale } from "$lib/i18n/translations";
import type { CobaltSettings } from "$lib/types/settings";

const defaultSettings: CobaltSettings = {
    schemaVersion: 5,
    advanced: {
        debug: false,
        useWebCodecs: false,
    },
    appearance: {
        theme: "auto",
        language: defaultLocale,
        autoLanguage: true,
        reduceMotion: false,
        reduceTransparency: false,
    },
    save: {
        alwaysProxy: false,
        localProcessing: false,
        audioBitrate: "128",
        audioFormat: "mp3",
        disableMetadata: false,
        downloadMode: "auto",
        filenameStyle: "classic",
        savingMethod: "download",
        allowH265: false,
        tiktokFullAudio: false,
        convertGif: true,
        videoQuality: "1080",
        youtubeVideoCodec: "h264",
        youtubeDubLang: "original",
        youtubeHLS: false,
    },
    privacy: {
        disableAnalytics: false,
    },
    processing: {
        customInstanceURL: "",
        customApiKey: "",
        enableCustomInstances: false,
        enableCustomApiKey: false,
        seenCustomWarning: false,
    }
}

export default defaultSettings;
