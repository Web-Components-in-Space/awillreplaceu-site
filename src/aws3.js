import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import {
    S3Client,
    ListObjectsCommand, ListObjectsV2Command,
} from '@aws-sdk/client-s3';

export const listBucket = async () => {
    const client = new S3Client({
        region:'us-west-1',
        credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region: 'us-west-1' }),
            identityPoolId: 'us-west-1:9b4d312f-40b9-4cad-8a82-65813fcecdfa',
        })
    });

    const input = { // ListObjectsV2Request
        Bucket: 'aiwillreplaceu',
        Prefix: "photos",
        MaxKeys: 1000,
    };
    const command = new ListObjectsV2Command(input);
    const result = await client.send(command);
    return result.Contents.reverse();
}