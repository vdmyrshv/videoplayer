import contextFactory from './contextFactory'

const userReducer = (state, action) => {
	switch (action.type) {
        case 'set_user':
            return action.payload
		default:
			return state
	}
}

const userActions = {
	fetchTracks: dispatch => async () => {
        const {data} = await trackerAPI.get('/tracks')
        dispatch({type: 'set_tracks', payload: data})
    },
	createTrack: dispatch => async ({ name, locations }) => {
		await trackerAPI.post('/tracks', {
			name,
			locations
		})
	}
}

export const { Context, Provider } = createDataContext(
	userReducer,
	{ ...userActions },
	[]
)