/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Endpoints from "../constants/Endpoints";
import API from "../api";
import { fsaFulfilled, fsaPending, fsaRejected } from "../core/FsaActions";
import { FSA } from "../models/FluxStandardActions";

export const fetchCases = createAsyncThunk("cases/fetchCases", async () => {
  const result = await new API(Endpoints.CASES).fetch();
  return result.data;
});

export const casesThunks = {
  [fetchCases.pending.toString()]: (state: FSA<any>) => fsaPending(state),
  [fetchCases.fulfilled.toString()]: (
    state: FSA<any>,
    action: { payload: any; type: string }
  ) => fsaFulfilled(state, action),
  [fetchCases.rejected.toString()]: (
    state: FSA<any>,
    action: { payload: any; type: string }
  ) => fsaRejected(state, action),
};
