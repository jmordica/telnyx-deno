/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VideoRegion = {
    /**
     * X axis value (in pixels) of the region's upper left corner relative to the upper left corner of the whole room composition viewport.
     */
    x_pos?: number | null;
    /**
     * Y axis value (in pixels) of the region's upper left corner relative to the upper left corner of the whole room composition viewport.
     */
    y_pos?: number | null;
    /**
     * Regions with higher z_pos values are stacked on top of regions with lower z_pos values
     */
    z_pos?: number | null;
    /**
     * Height of the video region
     */
    height?: number | null;
    /**
     * Width of the video region
     */
    width?: number | null;
    /**
     * Maximum number of columns of the region's placement grid. By default, the region has as many columns as needed to layout all the specified video sources.
     */
    max_columns?: number | null;
    /**
     * Maximum number of rows of the region's placement grid. By default, the region has as many rows as needed to layout all the specified video sources.
     */
    max_rows?: number | null;
    /**
     * Array of video recording ids to be composed in the region. Can be "*" to specify all video recordings in the session
     */
    video_sources?: Array<string>;
};

