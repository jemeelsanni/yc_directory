import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { writeClient } from '@/sanity/lib/write-client';
// Remove the unstable_after import

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_BY_ID_QUERY, { id });

    try {
        await writeClient
            .patch(id)
            .setIfMissing({ views: 0 })
            .inc({ views: 1 })
            .commit();
    } catch (error) {
        console.error('Error updating view count:', error);
    }

    return (
        <div className='view-container'>
            <div className='absolute -top-2 -right-2'>
                <Ping />
            </div>
            <p className='view-text'>
                <span className='font-black'> {totalViews} Views </span>
            </p>
        </div>
    );
}

export default View