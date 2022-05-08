let token = 'c16ea9391dde5b54d11c762b7ec17e93f2a95c44517a1363';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-car-directory.herokuapp.com/api/car`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://flask-car-directory.herokuapp.com/api/car`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},


        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://flask-car-directory.herokuapp.com/api/car/${id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
        delete: async(id:string) => {
            const response = await fetch(`https://flask-car-directory.herokuapp.com/api/car/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }
