import contextFactory from './contextFactory'

const userReducer = (state, action) => {
	switch (action.type) {
		case 'set_user':
			return { ...state, user: action.payload }
		default:
			return state
	}
}

const userActions = {
	setUser: dispatch => user => {
		dispatch({ type: 'set_user', payload: user })
	},
}

export const { Context, Provider } = contextFactory(
	userReducer,
	{ ...userActions },
	{}
)

