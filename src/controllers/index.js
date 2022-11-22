export const getDocs = async (model) => {
    try {
        const docs = await model.find();
        if(docs.length === 0) return false;
        return docs;
    } catch (error) {
        throw error;
    }
}

export const getDoc = async (id,model) => {
    try {
        const doc = model.findById(id);
        if(!doc) return false;
        return doc;
    } catch (error) {
        throw error;
    }
}

export const updateDoc = async (id,model,update) => {
    try {
        const old = await model.findByIdAndUpdate(id,update);
        return old;
    } catch (error) {
        throw error;
    }
}

export const deleteDoc = async (id,model) => {
    try {
        await model.findByIdAndRemove(id);
        return true;
    } catch (error) {
        throw error;
    }
}