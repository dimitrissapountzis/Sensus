/**
 * File: index.ts
 * 
 * This file simplifies route management by providing a single export point for all individual route modules.
 * 
 * Created: October 23rd, 2024
 * Created by: Dimitris Sapountzis <dimitris.sapountzis@scaleflame.com>
 * 
 * Last modified: October 29th, 2024
 * Modified by: Dimitris Sapountzis
 * 
 * Copyright: (c) 2024 ScaleFlame P.C.C. All Rights Reserved.
**/

// 01 - Import(s)

import harassment from "./content-moderation/harassment";
import hateSpeech from "./content-moderation/hate-speech";
import profanity from "./content-moderation/profanity";
import selfHarm from "./content-moderation/self-harm";
import spam from "./content-moderation/spam";
import violence from "./content-moderation/violence";

// 02 - Export(s)

export default [
    harassment,
    hateSpeech,
    profanity,
    selfHarm,
    spam,
    violence
];