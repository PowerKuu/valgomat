
export default defineNuxtRouteMiddleware((to, from) => {
    function getOrder(id: string, route: string) {
        if (!id) {
            if (route == "/intro") return -1
            else if (route == "/results") return 100

            return -1
        }

        const order = config.questions.find(q => q.id == id)?.order

        if (order == undefined) {
            console.warn(`Could not find order for id ${id}`)
            return -1
        }

        return order
    }

    const orderTo = getOrder(to.params.id as string, to.path)
    const orderFrom = getOrder(from.params.id as string, from.path)

    if (orderTo > orderFrom) {
        to.meta.pageTransition = { name: "slide-left" }
        from.meta.pageTransition = { name: "slide-left" }
    } else {
        to.meta.pageTransition = { name: "slide-right" }
        from.meta.pageTransition = { name: "slide-right" }
    }
})