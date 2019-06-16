import React from 'react';
import {
  Date,
  Entry,
  Tags,
  Video,
} from '../components';

function Post() {
  const tags = [
    'video',
    'world_cup',
    'womens_soccer',
  ];

 return (
   <Entry>
     <Date date='Sunday, June 9, 2019' />
     <Tags tags={tags} />
     <Video id='hOVkEHADCg4' />
   </Entry>
 );
}

export default Post;
