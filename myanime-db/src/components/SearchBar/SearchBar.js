import TextField from '@mui/material/TextField';

export const SearchBar = ({searchElement, handleSearch, setSearchElement}) => {
    return (
        <> 
        <main>
            <form 
				onSubmit={handleSearch}>
                <TextField
                    label="Search Anime"
                    variant="outlined"
                    value={searchElement}
                    onChange={e => setSearchElement(e.target.value)}
                />
			</form>
        </main>
        </>  
    )
}



