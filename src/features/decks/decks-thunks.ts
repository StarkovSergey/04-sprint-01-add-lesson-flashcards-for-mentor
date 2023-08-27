import { Dispatch } from 'redux'
import { decksAPI } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksThunk = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}

export const addDeckThunk = (name: string) => async (dispatch: Dispatch) => {
  decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckThunk = (id: string) => async (dispatch: Dispatch) => {
  decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}
