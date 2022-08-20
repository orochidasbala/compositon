<template>
    <div class="spin"></div>
    <span></span>
</template>

<script>
export default {};
</script>

<style>
.spin {
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: #23976b;
    border-bottom-color: crimson;
    margin: 10px auto;
    animation: spin 2s infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
