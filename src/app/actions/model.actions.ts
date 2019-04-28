import { Action } from '@ngrx/store';

export const UPDATE_MODEL = '[Post] Edit';

export class UpdateModel implements Action {
    readonly type = UPDATE_MODEL;
    constructor(public payload: string) { }
}

export type All = UpdateModel;
