import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element)=>{
        const appID =306672023;
        const serverSecret ="8be1692ef7675e72ddb92f867e8fc194";
        const kitTocken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            roomId.toString()
            );
        const zc = ZegoUIKitPrebuilt.create(kitTocken)
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name: 'Coppy Link',
                    url: `http://localhost:3000/room/${roomId}`

                }
            ],
            scenario: {mode:ZegoUIKitPrebuilt.OneONoneCall,}
        })

    }
    return <div>
        <div ref= {myMeeting} />
    </div>;
};
export default RoomPage;
