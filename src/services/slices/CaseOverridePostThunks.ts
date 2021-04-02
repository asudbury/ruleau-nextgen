/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Endpoints from "../constants/Endpoints";
import API from "../api";
import { fsaFulfilled, fsaPending, fsaRejected } from "../core/FsaActions";
import { FSA } from "../models/FluxStandardActions";

export const postCaseOverride = createAsyncThunk(
  "case/updateOverride",
  async ({ caseId, payload }: { caseId: string; payload: any }) => {
    const result = await new API(Endpoints.CASE_OVERRIDES)
      .tokenise(caseId)
      .post(payload);
    return result.data;
  }
);

export const caseOverridePostThunks = {
  [postCaseOverride.pending.toString()]: (state: FSA<any>) => fsaPending(state),
  [postCaseOverride.fulfilled.toString()]: (state: FSA<any>, action: { payload: any; type: string; }) =>
    fsaFulfilled(state, action),
  [postCaseOverride.rejected.toString()]: (state: FSA<any>, action: { payload: any; type: string; }) =>
    fsaRejected(state, action),
};
