'use client';
import { useEffect, useState} from 'react';
import { Button } from '@mantine/core';
import { UserInfo } from '@/controllers/UserInfo';
import { retrieve_followed_clubs } from '../personal/retrieve_followed_clubs';
import { useRouter } from 'next/navigation';
const { createClient } = require('@supabase/supabase-js');
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseURL, supabaseKEY);

export const FollowButton = props => {

    const router = useRouter();
    const [followed, setFollowed] = useState(false)
 
    useEffect(() => {
        const fetch = async () => {
            if(props.userID !== 0){
                let clubs = await retrieve_followed_clubs(props.userID)
                if(clubs.includes(props.clubName))
                    setFollowed(true)
            }
        };   
        fetch()
    }, [props.clubName])

  const handle = async event => {

    console.log(props.userID)
    if(props.userID === 0){
        router.push('/login');
    }
    else{

        let updatedClubs = []

        if(!followed){
            updatedClubs = await retrieve_followed_clubs(props.userID)
            updatedClubs.push(props.clubName)
        }
        else{
            updatedClubs = await retrieve_followed_clubs(props.userID)
            updatedClubs = updatedClubs.filter(x => x !== props.clubName)
        }

        const {data:club, error} = await supabase
        .from('User Profile V1a')
        .update({clubs: updatedClubs})
        .eq('userid', props.userID);

        setFollowed(!followed)
    }
    
  };


  return (
    <UserInfo>
        <Button color="#971B2F" w={245} onClick={handle}>
            {followed ? "Unfollow" : "Follow"}
        </Button>
    </UserInfo>
    )
};
