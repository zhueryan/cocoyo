<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Comment extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $content = json_decode($this->content);
        http_response_code(500);
        dd($this->commentable);

        return [
            'id'            => $this->id,
            'user'          => new User($this->whenLoaded('user')),
            'commentable'   => isset($this->commentable) ? $this->commentable->title : '',
            'type'          => $this->commenttable_type,
            'content_raw'   => $content->raw,
            'created_at'    => $this->created_at->diffForHumans(),
        ];
    }
}