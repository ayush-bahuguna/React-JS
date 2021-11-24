import { Link, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box } from '@mui/material';


                // resultList.map(anime => (
                //     <div key = {anime.mal_id}>
                //         {anime.title}
                //     </div>    
                // ))


export const Results = ({ resultList }) => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
            {
                resultList.map(anime => (
                            <Card sx={{ maxWidth: 345 }} key = {anime.mal_id}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={anime.image_url}
                                    alt={anime.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {anime.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {anime.synopsis}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <Link target="_blank" href={anime.url} underline="none">
                                            Learn More
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                ))
            }
                </Grid>
            </Grid>
        </Box>




        </>
    )
}
