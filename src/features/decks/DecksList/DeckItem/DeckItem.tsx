import s from './DeckItem.module.css'
import { useAppDispatch } from '../../../../app/store.ts'
import { deleteDeckThunk, updateDeckThunk } from '../../decks-thunks.ts'

type DeckProps = {
  deck: any // todo: fix
}

const TEST_ACC_NAME = 'test acc'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch()
  const handleDeleteButtonClick = () => {
    dispatch(deleteDeckThunk(deck.id))
  }

  const handeEditButtonClick = () => {
    dispatch(updateDeckThunk({ id: deck.id, name: `${deck.name} updated` }))
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button onClick={handeEditButtonClick}>update</button>
          <button onClick={handleDeleteButtonClick}>delete</button>
        </div>
      )}
    </li>
  )
}
