import { MutableRefObject, RefObject } from "react";
import { looseNum } from "./types";

export interface OperationsContext {
  inpContext: {
    [k: string]: {
      ref: MutableRefObject<TextInput>;
      payload: looseNum;
    };
  };
  btnContext:
    | {
        btn: MutableRefObject<TouchableOpacity | TouchableHighlight | Button>;
        operations: string[];
      }
    | {};
  outpContext: {
    [k: string]: {
      ref: MutableRefObject<Text>;
      payload: looseNum;
    };
  };
}
export interface TextInpAction {
  payload: {
    k: string;
    v: string;
    // ref: MutableRefObject<TextInput> | RefObject<TextInput>;
  };
}
export interface TextAction {
  payload: {
    k: string;
    v: string;
    // ref: MutableRefObject<Text> | RefObject<Text>;
  };
}
export interface TextInpsState {
  [k: string]: {
    v: string;
    // ref: MutableRefObject<TextInput> | RefObject<TextInput>;
  };
}
export interface TextsState {
  [k: string]: {
    v: string;
    // ref: MutableRefObject<Text> | RefObject<Text>;
  };
}
export type OperationsStore = EnhancedStore<
  {
    inpSlice: {};
    outpSlice: {};
  },
  UnknownAction,
  Tuple<
    [
      StoreEnhancer<{
        dispatch: ThunkDispatch<
          {
            inpSlice: {};
            outpSlice: {};
          },
          undefined,
          UnknownAction
        >;
      }>,
      StoreEnhancer,
    ]
  >
>;
