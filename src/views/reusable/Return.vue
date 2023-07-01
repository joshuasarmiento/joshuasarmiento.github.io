<template>
<nav aria-label="Breadcrumb" class="block md:hidden animate-fade-up">
    <ol class="flex items-center gap-1 -m-1 text-sm text-gray-600">
        <li class="rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </li>
        <li class="">
            <a @click="$router.go(-1)" class="cursor-pointer block transition "> Back </a>
        </li>
    </ol>
</nav>
</template>
