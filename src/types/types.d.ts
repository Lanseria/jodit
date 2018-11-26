/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * License GNU General Public License version 2 or later;
 * Copyright 2013-2018 Valeriy Chupurnov https://xdsoft.net
 */

import { IViewBased } from './view';

export interface IDictionary<T = any> {
    [key: string]: T;
}

export interface IBound {
    top: number;
    left: number;
    width: number;
    height: number;
}

export interface IPoint {
    x: number;
    y: number;
}

export interface ISelectionRange {
    startContainer: Node | null;
    startOffset: number | null;
    endContainer: Node | null;
    endOffset: number | null;
}

export interface IRGB {
    r: number;
    g: number;
    b: number;
}

export interface IPermissions {
    allowFiles: boolean;
    allowFileMove: boolean;
    allowFileUpload: boolean;
    allowFileUploadRemote: boolean;
    allowFileRemove: boolean;
    allowFileRename: boolean;
    allowFolders: boolean;
    allowFolderCreate: boolean;
    allowFolderMove: boolean;
    allowFolderRemove: boolean;
    allowFolderRename: boolean;
    allowImageResize: boolean;
    allowImageCrop: boolean;
    [key: string]: boolean;
}

export interface ICommandType {
    exec: (command: string, value: string, next: boolean) => void;
    hotkeys?: string | string[];
}

export interface IHasScroll {
    clientTop: number;
    clientLeft: number;
    scrollTop: number;
    scrollLeft: number;
}

export interface IStorage {
    set(key: string, value: string | number): void;
    get(key: string): string | null;
}

export interface RangeType {
    startContainer: number[];
    startOffset: number;
    endContainer: number[];
    endOffset: number;
}

export interface SnapshotType {
    html: string;
    range: RangeType;
}

export interface markerInfo {
    startId: string;
    endId?: string;
    collapsed: boolean;
    startMarker: string;
    endMarker?: string;
}

export interface IPlugin {
    afterInit(jodit?: IViewBased): void;
    beforeDestruct(jodit?: IViewBased): void;
}

/**
 * @property {ImageEditorOptions} imageeditor module's options
 */

export interface ImageEditorOptions {
    closeAfterSave: boolean;
    width: string | number;
    height: string | number;
    crop: boolean;
    resize: boolean;
    resizeUseRatio: boolean;
    resizeMinWidth: number;
    resizeMinHeight: number;
    cropUseRatio: boolean;
    cropDefaultWidth: string | number;
    cropDefaultHeight: string | number;
}

export interface ActionBox {
    action: string;
    box: {
        w: number;
        h: number;
        x?: number;
        y?: number;
    };
}