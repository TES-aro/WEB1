import { SearchBar } from "./SearchBar";

export function Home(){
  return(
    <div>
      <h3> Silly RuneScape API webpage </h3>
      <SearchBar url='/player'/>
      <p>
        Sadly due to CORS I couldn't get the data I wanted directly from the
        API and instead had to set up a simple server to "wash" the data.
        <br/>
        usernames have to fit /^[A-Za-z0-9_]+$/ and be at most 12 characters
        long. Zezima is an easy, existing username to check.
        <br />
        The code is rather bodged with poor state management, barely existing
        cacheing, and in general forced to fit the exercise – For one, I would
        not have done pages in simila manner for actually useable site.
      </p>
    </div>
  )
}
