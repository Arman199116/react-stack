import React, { useState, useEffect } from 'react'
import { useLinkClickHandler } from 'react-router-dom';
import { useDebounce } from '../hooks/debounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/gitHub-api'

const HomePage = () => {
    const [search, setSearch] = useState<string>('');
    const [dropDown, setDropDown] = useState<boolean>(false);
    const debounsed = useDebounce(search);

    let {isLoading, isError, data = []} = useSearchUsersQuery(debounsed, {
        skip : debounsed.length < 3,
        refetchOnFocus : true
    });

    const [fetchRepos, {isError : reposError, isLoading : reposLoading, data : repoData = []}] = useLazyGetUserReposQuery();

    useEffect(() => {
        setDropDown(debounsed.length > 3 && !!data.length);
    }, [debounsed, data]);

    const handleClick = (userName : string) => {
        fetchRepos(userName);
    }
    
    return (
        <div>
            {isError && <p>Error</p>}

            <div>
                <input
                    type="text"
                    placeholder="Search github user "
                    value={search}
                    onChange={ e => setSearch(e.target.value) }
                />
                {
                    dropDown && <ul>
                        {isLoading && <p>Loading..</p>}
                        {
                            data.map(user => {
                                return <li onClick={e => handleClick(user.login)} key={user.id}>{user.login}</li>
                            })
                        }
                    </ul>
                }
            </div>
            <div>
                {reposError && <p>repos Error</p>}
                {reposLoading && <p>repo Loading..</p>}
                {
                    repoData.map(repo => <p>{repo.url}</p> )
                }
            </div>
        </div>
    )
}

export default HomePage
