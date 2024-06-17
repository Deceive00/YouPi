import FavouriteCard from "./favourite-card"

const ProfileFavourites = () => {
    return (
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/>

            <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/>

            <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/>
        </div>
    )
}

export default ProfileFavourites