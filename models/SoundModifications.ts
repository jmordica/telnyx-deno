/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Use this field to modify sound effects, for example adjust the pitch.
 */
export type SoundModifications = {
    /**
     * Set the pitch directly, value should be > 0, default 1 (lower = lower tone)
     */
    pitch?: number;
    /**
     * Adjust the pitch in semitones, values should be between -14 and 14, default 0
     */
    semitone?: number;
    /**
     * Adjust the pitch in octaves, values should be between -1 and 1, default 0
     */
    octaves?: number;
    /**
     * The track to which the sound modifications will be applied. Accepted values are `inbound` or `outbound`
     */
    track?: string;
};

