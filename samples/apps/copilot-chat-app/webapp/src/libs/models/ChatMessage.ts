// Copyright (c) Microsoft. All rights reserved.

/**
 * Role of the author of a chat message. It's a copy of AuthorRoles in the API C# code.
 */
export enum AuthorRoles {
    // The current user of the chat.
    User = 0,

    // The bot.
    Bot,

    // The participant who is not the current user nor the bot of the chat.
    Participant,
}

export interface ChatMessage {
    timestamp: number;
    userName: 'bot' | string;
    userId: string;
    content: string;
    id?: string;
    authorRole: AuthorRoles;
    debug?: string;
}
