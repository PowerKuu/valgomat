
export default defineNuxtRouteMiddleware((to, from) => {
    function getOrder(id: string) {
        const order = config.questions.find(q => q.id == id)?.order

        if (order == undefined) {
            console.warn(`Could not find order for id ${id}`)
            return -1
        }

        return order
    }

    const orderTo = typeof to.params.id == "string" ? getOrder(to.params.id) : -1
    const orderFrom = typeof from.params.id == "string" ? getOrder(from.params.id) : -1



    if (orderTo > orderFrom) {
        to.meta.pageTransition = { name: "slide-left" }
        from.meta.pageTransition = { name: "slide-left" }
    } else {
        to.meta.pageTransition = { name: "slide-right" }
        from.meta.pageTransition = { name: "slide-right" }
    }
})