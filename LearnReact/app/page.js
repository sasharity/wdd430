
// import { useState } from 'react';
import LikeButton from './like-button';

        function Header({title}) {
        
            return <h1>{title ? title : 'Default title'}</h1>;
        }

        export default function HomePage() {
            const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
            

            return (
                <div>
                    {/* Nesting the Header component */}
                    <Header title="Develop. Preview. Ship."/>
                    <ul>
                        {names.map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                    <LikeButton />
                   
                </div>);
                <div>

                </div>
        }

 
        // root.render(<HomePage />);

