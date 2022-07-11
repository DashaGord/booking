import {AppModel} from "../Model/AppModel";
import {AvailableRoomsModel} from "../Model/AvailableRoomsModel";

class AvailableRoomsService {

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAvailableRooms = async () => {
        const res = await this.getResource(`http://localhost:8000/available_rooms/?date_in=2022-07-7&date_out=2022-07-11&price_from=1000&price_to=30000&skip=0`);
        let count = res.count;
        let rooms = res.available_rooms.map(room => {
            return new AppModel(room.id, room.images, room.stars, room.avg_price)
        });
        const availableRoomsModel = new AvailableRoomsModel(count, rooms);
        return availableRoomsModel;
    }

}

export default AvailableRoomsService;

