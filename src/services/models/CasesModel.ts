/* eslint-disable camelcase */
import { FSAMeta } from "./FluxStandardActions";

export interface CasesModel {
  meta: FSAMeta;
  error: boolean;
  payload: CasesModelPayload | Error | string | any;
}

export interface Case {
  id: string;
  case_status: string;
  created_at: string;
}

export interface CasesModelPayload {
  data: Array<Case>;
}
