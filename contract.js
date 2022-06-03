const functions = { visit }

export function handle(state, action) {
  if (Object.keys(functions).includes(action.input.function)) {
    return functions[action.input.function](state, action)
  }
  return ContractError('function not defined!')
}

function visit(state, action) {
  state.count = state.count + 1;
  return { state }
}