import { Button } from '../components/Button';

import '../styles/sidebar.scss';


interface SideBarProps {
  selectedGenreId:number;
  genres: Array<GenreResponseProps>;
  handleClickButton: Function;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({genres,selectedGenreId,handleClickButton}:SideBarProps) {
  <span>Watch<p>Me</p></span>
  
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}