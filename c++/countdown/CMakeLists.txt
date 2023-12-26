cmake_minimum_required(VERSION 3.0.0)
project(coding-questions VERSION 0.1.0)


add_executable(coding-quetions countdown.cpp)
target_compile_features(coding-questins PRIVATE cxx_std_17)

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})

include(CPack)
