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
    'inspiring',
    'feminism',
  ];

 return (
   <Entry>
     <Date date='Saturday, June 8, 2019' />
     <Tags tags={tags} />
     <Video id='whpJ19RJ4JY' />
   </Entry>
 );
}

export default Post;
