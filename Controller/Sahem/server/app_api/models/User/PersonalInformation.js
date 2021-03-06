import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const PersonalInformationSchema = new Schema({
    creator_id: {
        type:Schema.Types.ObjectId,
        ref:'Creator'
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    birthday: {
        type: Date
    },
    address: {
        type: String
    }
});
PersonalInformationSchema.plugin(timestamps);
PersonalInformationSchema.index({ createdAt: 1, updatedAt: 1 });
export const PersonalInformation = mongoose.model('PersonalInformation', PersonalInformationSchema);