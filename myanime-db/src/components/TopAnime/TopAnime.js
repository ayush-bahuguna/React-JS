import { ListItem, ListItemAvatar, Avatar, Typography, Link } from '@mui/material';

export const TopAnime = ({ topAnimeList }) => {
    return (
        <> 
            <Typography variant="h4" gutterBottom component="div">
                Top Anime
            </Typography>
            {
                topAnimeList.map(anime => (
                        // <a 
                        //     href={anime.url} 
                        //     target="_blank"
                        //     key={anime.mal_id} 
                        //     rel="noreferrer">
                        //     { anime.title }
                        // </a>

                        <ListItem key={anime.mal_id}>
                            <ListItemAvatar>
                                <Avatar src={anime.image_url}>
                                </Avatar>
                            </ListItemAvatar>
                            <Link target="_blank" href={anime.url} underline="none">
                                {anime.title}
                            </Link>
                        </ListItem>
                ))
            }
        </>
    )
}