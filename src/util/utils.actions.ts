//Criando uma action
export function action<T = {}>(
  type: string,
  payload?: T
): ActionPayload<T> | Action {
  return payload
    ? ({
        type,
        payload
      } as ActionPayload<T>)
    : ({
        type
      } as Action);
}

//Interfaces definindo o tipo da action

//Action sem payload (sem conteudo)
export interface Action {
  type: string;
}

//Action com payload
export interface ActionPayload<T> extends Action {
  payload: T;
}

//União de tipos entre as duas
export type ActionType<T = {}> = ActionPayload<T> | Action;
