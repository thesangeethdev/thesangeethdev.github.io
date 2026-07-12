package com.sangeeth.portfolio

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform