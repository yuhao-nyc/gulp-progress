function YouTubePlayList(i,t){this.id=i,this.entries=t,this.currently_playing=0,this.randomizer=!1}YouTubePlayList.prototype={next:function(){var i=!1;return this.randomizer?(i=!0,this.currently_playing=Math.floor(Math.random()*this.entries.length)):this.currently_playing<=this.entries.length&&(i=!0,this.currently_playing++),i},previous:function(){var i=!1;return this.currently_playing>0&&(i=!0,this.currently_playing--),i},getCurrentlyPlaying:function(){return this.entries[this.currently_playing].video_id},setCurrentlyPlaying:function(i){for(var t=0;t<this.entries.length;t++)if(this.entries[t].video_id===i){this.currently_playing=t;break}},randomize:function(){return this.randomizer=!this.randomizer,this.randomizer},isRandomized:function(){return this.randomizer}};