import GameareaPlaceholder from "./GameareaPlaceholder"
import HowToPlay from "./How2Play"
import InventoryList from './inventory-list';
import Introduction from './introduction';

export default function Game() {
    return (
        <div id="Game_Container">
            This is our container for game components
            <GameareaPlaceholder />
            <HowToPlay />
            <Introduction />
            <InventoryList />
        </div>
    )
}


